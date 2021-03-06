class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  attr_reader :current_user

  protected
  def authenticate_request!
    if !user_id_in_token?
      render json: { status: 'unauthorized' }
      return
    end
    @current_user = User.find(auth_token[:user_id])
  rescue JWT::VerificationError, JWT::DecodeError
    render json: { status: 'unauthorized' }
  end

  private
  def http_token
    @http_token ||= if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end  
  end
  
  def auth_token
    @auth_token ||= JsonWebToken.decode(http_token)
  end
  
  def user_id_in_token?
    http_token && auth_token && auth_token[:user_id].to_i
  end
end

module Api
    module V1
        class AuthenticationController < ApplicationController
            def authenticate_user
                user = User.first
                if user.valid_password?(params[:password])
                    render json: payload(user)
                else
                    render json: { status: 'unauthorized' }
                end
            end
            
            def payload(user)
                return nil unless user and user.id 
                {
                    auth_token: JsonWebToken.encode({user_id: user.id}),
                    user: {id: user.id, email: user.email}
                }
            end
        end
    end 
end
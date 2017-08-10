module Api
  module V1
    class MobileconfigController < ApplicationController
      before_filter :verify_api_key!
      skip_before_action :verify_authenticity_token
      
      def create
        ssid = params[:ssid]
        password = params[:password]
        config = Mobileconfig.new(ssid, password)
        send_data sign_with_cert(config.to_plist_node), :filename => ssid + '.mobileconfig'
      end
      
      private
      
      def verify_api_key!
        unless params[:api_key]
          render json: {status: 'unauthroized'}, status: :unauthorized
        end
      end

      def sign_with_cert(data)
        key = OpenSSL::PKey::RSA.new File.read "#{Dir.home}/privkey.pem"
        cert = OpenSSL::X509::Certificate.new File.read "#{Dir.home}/cert.pem"
        chain = OpenSSL::X509::Certificate.new File.read "#{Dir.home}/chain.pem"
        return OpenSSL::PKCS7.sign(cert, key, data, [chain], OpenSSL::PKCS7::BINARY).to_der
      end
    end
  end
end
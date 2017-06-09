module Api
    module V1
        class ImagesController < ApplicationController
            before_filter :authenticate_request!, except: [:index]

            def index
            end

            def create
              o = Image.create(loc: params[:image])
              render json: { loc: o.loc.url }
            end
        end
    end
end




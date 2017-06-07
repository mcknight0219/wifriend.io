module Api 
    module V1
        class PostsController < ApplicationController    
            before_filter :authenticate_request!, except: [:index]
            
            def index
                render :json => Post.all.as_json(except: [:updated_at])
            end
            
            def create
                p = Post.create post_params
                render :json => p.as_json(root: true, except: [:updated_at])
            end
            
            def destroy
                Post.find(params[:id]).delete
                render :json => {success: true}
            end

            def update
                p = Post.find(params[:id])
                p.update post_params
                render :json => p.as_json(root: true, except: [:updated_at]) 
            end

            def post_params
                params.require(:post).permit(:title, :content, :tags)
            end
        end
    end
end

module Api 
    module V1
        class PostsController < ApplicationController    
            def index
                render :json => Post.all.as_json(except: [:updated_at])
            end
            
            def show
                Post.find(params[:id])
            end
            
            def create
                p = Post.create post_params
                render :json => p.as_json(root: true, except: [:updated_at])
            end
            
            def destroy
                Post.find(params[:id]).delete
            end

            def post_params
                params.require(:post).permit(:title, :content, :tags)
            end
        end
    end
end

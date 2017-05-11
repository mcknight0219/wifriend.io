class PostsController < ApplicationController    
    def index
        Post.all.as_json(except: [:updated_at])
    end
    
    def show
        Post.find(params[:id])
    end
    
    def create
        Post.create post_params
    end
    
    def destroy
        Post.find(params[:id]).delete
    end

    def post_params
        params.require(:post).permit(:title, :content, :tags)
    end
end
``
class Post < ApplicationRecord
    
    def tags=(tags)
        tags = tags.map { |s| s.strip }.join(',') if if tags.is_a?(Array)
        super(tags)
    end
    
    def tags
        super.split(',').map { |s| s.strip }
    end

    def readable_date
    end

    def self.find_by_tag(tag)
        Post.all.filter { |p| p.all_tags.include? tag }
    end
end

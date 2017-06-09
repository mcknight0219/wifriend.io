class AddLocColumnsToImages < ActiveRecord::Migration[5.0]
  def change
    add_attachment :images, :loc
  end

  def down
    remove_attachment :images, :loc
  end 
end

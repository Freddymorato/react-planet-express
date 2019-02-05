class Comment < ApplicationRecord
  belongs_to :destination
  validates_presence_of :content, :commenter, :destination_id
end

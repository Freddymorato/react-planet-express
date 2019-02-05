class Destination < ApplicationRecord
  has_many :comments
  validates_presence_of :name, :img_url, :astronomical_body, :view_on_maps, :radius, :description
end

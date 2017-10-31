class Review < ApplicationRecord
  has_many :ideas

  belongs_to :idea
  belongs_to :user


  validates :body, presence: :true
end

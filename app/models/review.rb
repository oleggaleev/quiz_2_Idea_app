class Review < ApplicationRecord
  has_many :ideas, dependent: :nullify

  belongs_to :idea
  belongs_to :user


  validates :body, presence: :true
end

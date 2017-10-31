class Idea < ApplicationRecord

  belongs_to :user
  has_many :reviews, dependent: :nullify

validates(:title, {
  presence: true
  })

validates(:description, {
  presence: true
  })

  before_validation :titleize_title

  private

  def titleize_title
    self.title = title.titleize if title.present?
  end

end

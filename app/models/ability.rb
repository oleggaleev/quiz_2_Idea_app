class Ability
  include CanCan::Ability

  def initialize(user)


    can :manage, Idea do |idea|
      idea.user == user
    end

    can :manage, Review do |review|
      review.user == user
    end

    cannot :manage, Review do |review|
      review.user != user
    end
  end
end

class Jump < ApplicationRecord
  belongs_to :user

  has_many :skydives
  has_many :jumpers, through: :skydives, source: :user
end

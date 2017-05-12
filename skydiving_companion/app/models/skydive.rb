class Skydive < ApplicationRecord
  belongs_to :user
  belongs_to :jump
end

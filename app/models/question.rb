class Question < ApplicationRecord
  has_many :answers
  belongs_to :topic
end

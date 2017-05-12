class JumpsController  < ApplicationController
  before_action :authenticate_user!

  def index
    jumps = Jump.all
    render json: jumps.to_json()  
  end
end
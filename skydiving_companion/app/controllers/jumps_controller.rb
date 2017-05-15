class JumpsController  < ApplicationController
  before_action :authenticate_user!

  
  def jump_params
    params.require(:jump).permit([:number, :date, :location, :altitude, :gear, :description])
  end

  def index
    jumps = Jump.all
    render :json => jumps 
  end

  def show
    jump = Jump.find(params[:id])
    render :json => jump
  end

  def create
    jump = Jump.create(jump_params)
    render :json => jump 
  end

  def update
    jump = Jump.find(params[:id])
    if jump.update_attributes(jump_params)
      render :json => jump
    else
      render json: {status: :update_failed}
    end
  end

  def destroy
    jump = Jump.find(params[:id])
    if jump.destroy!
      render json: {status: :success}
    else
      render json: {status: :delete_failed}
    end
  end
end
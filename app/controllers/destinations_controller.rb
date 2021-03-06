class DestinationsController < ApplicationController
  before_action :set_destination, only: [:show, :update, :destroy]


  def index
    @destinations = Destination.all
    render json: @destinations
  end

  def show
    render json: @destination
  end

  def create
    @destination = Destination.new(destination_params)
    if @destination.save
      render json: @destination
    end
  end

  def update
    if @destination.update(destination_params)
      render json: @destination
    end
  end

  def destroy
    @destination.destroy
  end

  private

  def set_destination
    @destination = Destination.find(params[:id])
  end

  def destination_params
    params.require(:destination).permit(:name, :img_url, :astronomical_body, :view_on_maps, :radius, :description, :likes)
  end
end

class PagesController < ApplicationController
  def index
    ActionCable.server.broadcast "room_channel", message: "Hello World 123"
  end
end

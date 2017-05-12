require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module SkydivingCompanion
  class Application < Rails::Application

    config.middleware.insert_before 0, "Rack::Cors" do
      allow do
        origins '*'
        resource '*', :header => :any, :methods => [:get, :post, :options, :delete]
      end
    end

    config.active_record.raise_in_transactional_callbacks = true
  end
end

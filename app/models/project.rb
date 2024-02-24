class Project

  attr_accessor :description, :title, :src, :redirect_url, :tags

  def initialize(attributes = {})
    Rails.logger.debug "Attributes when instantiating project: #{attributes}"
    @description = attributes[:description]
    @title = attributes[:title]
    @src = attributes[:src]
    @redirect_url = attributes[:redirect_url]
    @tags = attributes[:tags] || []
  end

  def self.all
    Rails.logger.debug "Setting up all field of Project model"
    load_projects
  end

  def self.load_projects
    Rails.logger.debug "Loading project data..."
    project_data = JSON(File.read("app/models/projects.json"))

    projects = project_data['projects'].map do |pd|
      Rails.logger.debug "Creating project: #{pd['title']}"
      tags = pd['tags'].map do |tag_name|
        Rails.logger.debug "Creating tag: #{tag_name}"
        Tag.new(name: tag_name)
      end

      Rails.logger.debug "Tags: #{tags}"

      Project.new(description: pd['description'],
       title: pd['title'],
        src: pd['src'],
        redirect_url: pd['redirect_url'],
        tags: tags)
      end
    Rails.logger.debug "Finished loading projects: #{projects}"
    projects
  end
end

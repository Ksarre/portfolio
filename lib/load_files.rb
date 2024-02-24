module LoadFiles
  def load_projects
    Rails.logger.debug "Loading project data..."
    project_data = JSON(File.read("projects.json"))
    project_data['projects'].map do |pd|
      Rails.logger.debug "Creating project: #{pd['title']}"
      Project.new(pd['description'], pd['title'], pd['src'], pd['redirect_url'])

      pd['tags'].map do |tag_name|
        tag = Tag.new(tag)
        project.tags << tag
      end
      projects << project
    end
    Rails.logger.debug "Returning projects: #{projects}"
    projects
  end
end

class HomeController < ::ApplicationController

    def main
        @projects = Project.all
    end

    def about
    end

    def download_pdf
        send_file("#{Rails.root}/app/assets/resume/cv_swe_kyle.pdf",
        filename: "cv.pdf",
        type: "application/pdf")
    end
end

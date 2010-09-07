# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper

  def javascripts_frameworks
    returning "" do |html|
      html << javascript_include_tag('http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js')
      html << javascript_include_tag('fancybox/jquery.fancybox-1.3.1.pack')
    end
  end

  def javascripts
    javascript_include_tag('application')

  end

  def stylesheets
    returning "" do |css|
      css << stylesheet_link_tag("http://yui.yahooapis.com/2.8.1/build/reset/reset-min.css")
      css << stylesheet_link_tag('application', 'text', 'gallery')
      css << stylesheet_link_tag('/javascripts/fancybox/jquery.fancybox-1.3.1.css')
    end
  end

end

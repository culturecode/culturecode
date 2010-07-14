# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper

  def javascripts_frameworks
    returning "" do |html|
      html << javascript_include_tag('prototype')
      html << javascript_include_tag('http://ajax.googleapis.com/ajax/libs/scriptaculous/1.8.3/scriptaculous.js?load=effects,dragdrop,controls,builder,slider')
    end
  end

  def javascripts
    javascript_include_tag('application')
  end

  def stylesheets
    returning "" do |css|
      css << stylesheet_link_tag("http://yui.yahooapis.com/2.8.1/build/reset/reset-min.css")
      css << stylesheet_link_tag('application')
    end
  end

end

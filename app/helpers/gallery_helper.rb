module GalleryHelper
  def gallery_stack(gallery_name, poster_filename, slides)
    output = "".html_safe
    slides.each do |filename, caption|
      output << content_tag(:li, :class => 'gallery_item' , :style => ('display:none' unless slides.keys.first == filename)) do
        link_to image_tag("previous_work/#{gallery_name}/#{poster_filename}", :class => 'thumbnail'), asset_path("previous_work/#{gallery_name}/#{filename}"), :rel => "gallery_#{gallery_name}", :title => caption
      end
    end
    return output
  end
end
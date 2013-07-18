module GalleryHelper
  def gallery_stack(gallery_header, gallery_name, slides)
    output = "".html_safe
    slides.each do |filename, caption|
      output << content_tag(:li, :class => 'gallery_item' , :style => ('display:none' unless slides.keys.first == filename)) do
        link_to image_tag("previous_work/#{gallery_name}/poster_thumb.png", :class => 'thumbnail'), asset_path("previous_work/#{gallery_name}/#{filename}"), :rel => "previous_work", :title => gallery_header, :caption => caption
      end
    end
    return output
  end
end
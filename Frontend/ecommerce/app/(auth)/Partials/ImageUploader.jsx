import { Controller } from "react-hook-form";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { FilePond, registerPlugin } from "react-filepond";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImageUploader = ({ control, name, images, setImages }) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FilePond
            {...field}
            files={images}
            onupdatefiles={(fileItems) => {
              // Set current file objects to state
              setImages(fileItems.map((fileItem) => fileItem.file));
              // Update the field value
              field.onChange(fileItems.map((fileItem) => fileItem.file));
            }}
            allowMultiple={true}
            maxFiles={3}
            name="files"
            allowReorder={true}
            labelIdle='Arrastra y suelta tus archivos o <span class="filepond--label-action">Buscalos</span>'
            required
          />
        )}
      />
    </>
  );
};

export default ImageUploader;

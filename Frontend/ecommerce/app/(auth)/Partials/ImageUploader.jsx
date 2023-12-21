import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Controller } from "react-hook-form";
import { FilePond, registerPlugin } from "react-filepond";

registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop
);

const ImageUploader = ({
  control,
  name,
  images,
  setImages,
  numberFiles = 4,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <FilePond
              {...field}
              files={images}
              onupdatefiles={(fileItems) => {
                // Set current file objects to state
                setImages(fileItems.map((fileItem) => fileItem.file));
              }}
              acceptedFileTypes={["image/*"]}
              allowFileTypeValidation={true}
              allowImageCrop={true}
              allowMultiple={true}
              allowReorder={true}
              imageCropAspectRatio="1:1"
              labelIdle='Arrastra y suelta tus archivos o <span class="filepond--label-action">Buscalos</span>'
              maxFiles={numberFiles}
              name="files"
              required
            />
          </>
        )}
      />
    </>
  );
};

export default ImageUploader;

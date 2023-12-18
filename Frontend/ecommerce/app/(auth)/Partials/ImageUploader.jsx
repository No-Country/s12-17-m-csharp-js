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
  FilePondPluginImageCrop,
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
        rules={{
          validate: (files) =>
            files.length === numberFiles ||
            `Debes subir ${numberFiles} imágenes`,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <FilePond
              {...field}
              files={images}
              onupdatefiles={(fileItems) => {
                // Set current file objects to state
                setImages(fileItems.map((fileItem) => fileItem.file));
                // Update the field value
                field.onChange(fileItems.map((fileItem) => fileItem.file));
              }}
              allowFileTypeValidation={true}
              acceptedFileTypes={["image/*"]}
              allowMultiple={true}
              maxFiles={numberFiles}
              name="files"
              allowImageCrop={true}
              imageCropAspectRatio="1:1"
              allowReorder={true}
              labelIdle='Arrastra y suelta tus archivos o <span class="filepond--label-action">Buscalos</span>'
              required
            />
            {/* Display error message */}
            {error && (
              <span className="text-sm text-red-500">{error.message}</span>
            )}
          </>
        )}
      />
    </>
  );
};

export default ImageUploader;

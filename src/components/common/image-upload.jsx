import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

function ImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  imageLoadingState,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);
  const [imageError, setImageError] = useState(null); // For error messages
  const { toast } = useToast();
  console.log(isEditMode, "isEditMode");
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB in bytes

  function handleImageFileChange(event) {
    console.log(event.target.files, "event.target.files");
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) {
      if (selectedFile.size > MAX_SIZE) {
        setImageError("File size exceeds 10MB limit");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "File size exceeds 10MB limit",
        });

        setImageFile(null);
        return;
      } else {
        setImageError(null);
        setImageFile(selectedFile);
      }
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("file", imageFile); // Ensure the field name is 'file' as expected in your FastAPI backend

    try {
      // Replace 'http://localhost:8000' with your backend's URL if necessary
      const response = await axios.post(
        "http://127.0.0.1:8080/api/v1/upload-image/", // Make sure this points to your FastAPI endpoint
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the proper content type for file uploads
          },
        }
      );

      if (response?.data?.success) {
        toast({
          title: "Image Uploaded Successfully",
        });
        setUploadedImageUrl(response.data.result.url);
      }
    } catch (error) {
      toast({
        title: "Error Uploading Image",
        description: error.message || "Something went wrong!",
      });
    } finally {
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className={`w-full mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}>
      <Label className="text-lg text-slate-800 font-semibold mb-2 block">
        Upload Image
      </Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`${
          isEditMode ? "opacity-60" : ""
        } border-2 border-dashed border-muted-foreground rounded-lg p-4`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={`${
              isEditMode ? "cursor-not-allowed" : ""
            } flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span className="text-muted-foreground">
              Drag & drop or click to upload image
            </span>
            <span className="text-muted-foreground mt-2">
              File size should be under 10 MB
            </span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="w-[50%] text-slate-800 mx-auto flex items-center justify-center h-10 bg-transparent">
            Uploading...
          </Skeleton>
        ) : (
          <div className="flex items-center justify-between py-[4.6px]">
            <div className="flex items-center">
              <FileIcon className="w-8 text-slate-800  mr-2 h-8" />
            </div>
            <p className="text-sm text-slate-800 font-medium">
              {imageFile.name}
            </p>
            <div
              className="hover:bg-white !bg-none border-none"
              onClick={handleRemoveImage}
            >
              <XIcon className="text-black hover:w-7 h-7" />
              <span className="sr-only">Remove File</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;

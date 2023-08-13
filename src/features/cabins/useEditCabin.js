import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const queyClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin edited successfully");
      queyClient.invalidateQueries({ queryKeys: ["cabins"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editCabin };
}

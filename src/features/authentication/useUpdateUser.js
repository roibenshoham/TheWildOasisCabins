import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queyClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queyClient.setQueryData(["user"], user);
      // queyClient.invalidateQueries({ queryKeys: ["user"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateUser };
}

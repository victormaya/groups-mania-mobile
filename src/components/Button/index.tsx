import React from "react";
import { ButtonTouchableOpacity, ButtonTouchableOpacityGhost, TextButton, TextButtonGhost } from "./style";

function Button({ ghost, label }: { ghost?: boolean; label: string }) {
  if (ghost)
    return (
      <ButtonTouchableOpacityGhost>
        <TextButtonGhost>{label}</TextButtonGhost>
      </ButtonTouchableOpacityGhost>
    );
  return (
    <ButtonTouchableOpacity>
      <TextButton>{label}</TextButton>
    </ButtonTouchableOpacity>
  );
}

export default Button;

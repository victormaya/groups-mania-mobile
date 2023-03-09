import React from "react";
import { ButtonTouchableOpacity, ButtonTouchableOpacityGhost, TextButton } from "./style";

function Button({ ghost, label }: { ghost?: boolean; label: string }) {
  if (ghost)
    return (
      <ButtonTouchableOpacityGhost>
        <TextButton>{label}</TextButton>
      </ButtonTouchableOpacityGhost>
    );
  return (
    <ButtonTouchableOpacity>
      <TextButton>{label}</TextButton>
    </ButtonTouchableOpacity>
  );
}

export default Button;

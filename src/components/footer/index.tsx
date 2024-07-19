import { Refine } from "@refinedev/core";
import { ThemedLayoutV2 } from "@refinedev/mui";
import { Box } from "@mui/material";
import { ColorModeContext } from "@contexts/color-mode";
import React, { useContext } from "react";
import { useGetIdentity } from "@refinedev/core";

type IUser = {
    id: number;
    name: string;
    avatar: string;
  };

const App: React.FC = () => {
    const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity<IUser>();
  return (
    <Refine
    // ...
    >
      <ThemedLayoutV2
        Footer={() => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "64px",
              backgroundColor: "primary.main",
            }}
          >
            My Custom Footer
          </Box>
        )}
      >
        {/* ... */}
      </ThemedLayoutV2>
    </Refine>
  );
};
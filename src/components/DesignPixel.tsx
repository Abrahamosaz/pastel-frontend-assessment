"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { designPixels } from "@/constants";

interface FeatureItemProps {
  isActive?: boolean;
}

const FeatureItem = styled("div")<FeatureItemProps>(({ theme, isActive }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  position: "relative",
  paddingLeft: theme.spacing(3),
  paddingBottom: theme.spacing(6),
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: "24px",
    bottom: 0,
    width: "2px",
    backgroundColor: theme.palette.secondary.main,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "-2px",
    top: "12px",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    ...(isActive && {
      boxShadow: `0 0 0 8px ${theme.palette.primary.main}1A`,
    }),
  },
}));

const ViewDetailsLink = styled("a")(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontSize: "0.875rem",
  fontWeight: 500,
  marginTop: theme.spacing(1),
  "&:hover": {
    textDecoration: "underline",
  },
  "&::after": {
    content: '"→"',
    transition: "transform 0.2s",
  },
  "&:hover::after": {
    transform: "translateX(4px)",
  },
}));

const FeaturesList = () => {
  const [activeId, setActiveId] = useState<number>(designPixels[0]?.id);

  return (
    <Box sx={{ maxWidth: "100%", py: 4 }}>
      {designPixels.map((feature, index) => (
        <FeatureItem key={feature.id} isActive={feature.id === activeId}>
          <div
            onClick={() => setActiveId(feature.id)}
            className="w-full cursor-pointer"
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              {feature.title}
            </Typography>
            {activeId == feature.id && (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    maxWidth: "600px",
                  }}
                >
                  {feature.description}
                </Typography>
                <ViewDetailsLink href="#">View Details</ViewDetailsLink>
              </>
            )}
          </div>
        </FeatureItem>
      ))}
    </Box>
  );
};

const DesignPixel = () => {
  return (
    <div className="mt-50 w-full flex items-center jsutify-center bg-transparent">
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] tracking-[-5px] font-medium">
          Design pixel-perfect sites beyond ordinary
        </h1>

        <FeaturesList />
      </div>
    </div>
  );
};

export default DesignPixel;

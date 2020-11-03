import React from "react";
import clsx from "clsx";
import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const defaultMaterials = {
  datasets: [
    {
      data: [0, 0, 0, 43, 452, 684, 452, 68],
      backgroundColor: [
        colors.grey[900],
        colors.brown[500],
        colors.green[500],
        colors.indigo[500],
        colors.red[500],
        colors.orange[500],
        colors.yellow[500],
        colors.grey[500],
      ],
      borderWidth: 6,
      borderColor: colors.common.white,
      hoverBorderColor: colors.common.white,
    },
  ],
  labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "t8"],
};
const GatheringByTier = ({
  className,
  materials = defaultMaterials,
  ...rest
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [
    {
      title: "T1",
      value: 0,
      color: colors.grey[900],
    },
    {
      title: "T2",
      value: 0,
      color: colors.brown[500],
    },
    {
      title: "T3",
      value: 0,
      color: colors.green[500],
    },
    {
      title: "T4",
      value: 43,
      color: colors.blue[500],
    },
    {
      title: "T5",
      value: 452,
      color: colors.red[500],
    },
    {
      title: "T6",
      value: 684,
      color: colors.orange[500],
    },
    {
      title: "T7",
      value: 452,
      color: colors.yellow[500],
    },
    {
      title: "T8",
      value: 68,
      color: colors.grey[500],
    },
  ];

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Collected Materials" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={materials} options={options} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {devices.map(({ color, title, value }) => (
            <Box key={title} p={1} textAlign="center">
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h5">
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
export default GatheringByTier;

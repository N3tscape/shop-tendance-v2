import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function ProductCard({ product }) {
  return (
    <Card className="border rounded-none">
      <CardHeader
        shadow={false}
        floated={false}
        className="aspect-h-1 aspect-w-1 w-fill h-80 overflow-hidden rounded-none bg-gray-200 lg:aspect-none group-hover:opacity-75"
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
      </CardHeader>
      <CardBody className="flex justify-between">
        <div>
          <Typography variant="h6" color="blue-gray">
            {product.title}
          </Typography>
          <Typography variant="small" color="gray">
            {product.description}
          </Typography>
        </div>
        <Typography variant="small" color="blue-gray">
          {product.basePrice.toFixed(2)} €
        </Typography>
      </CardBody>
    </Card>
  );
}

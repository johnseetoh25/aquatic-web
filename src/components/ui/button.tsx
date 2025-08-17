import * as React from 'react'
import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  "btn inline-block cursor-pointer rounded-md",
  {
    variants: {
      variant: {
        default: "btn",
        outline: "btn-outline",
        ghost: "btn-ghost",
        link: "btn-link",
      },
      size: {
        default: "btn-md",
        sm: "btn-sm",
        lg: "btn-lg"
      },
      shape: {
        default: "btn",
        square: "btn-square",
        circle: "btn-circle"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default"
    },
  }
)

function Button({
  className,
  variant,
  size,
  shape,
  ...props
}: React.ComponentProps<"button"> &
   VariantProps<typeof buttonVariants>
) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, shape, className}))}
      {...props}
    />
  )
}

export { Button }

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

module "ec2_setup" {
  source           = "./modules/ec2"
  region           = var.region
  ami_id           = var.ami_id
  instance_type    = var.instance_type
  key_name         = var.key_name
  public_key_path  = var.public_key_path
  private_key_path = var.private_key_path
  your_ip          = var.your_ip
}

output "ec2_public_ip" {
  value = module.ec2_setup.ec2_public_ip
}
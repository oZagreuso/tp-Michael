<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\VilleRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VilleRepository::class)]
#[ApiResource]
class Ville
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'ville')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Pays $pays = null;

    #[ORM\Column(length: 6)]
    private ?string $codePostalVille = null;

    #[ORM\Column(length: 255)]
    private ?string $nomVille = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPays(): ?Pays
    {
        return $this->pays;
    }

    public function setPays(?Pays $pays): static
    {
        $this->pays = $pays;
        return $this;
    }

    public function getCodePostalVille(): ?string
    {
        return $this->codePostalVille;
    }

    public function setCodePostalVille(string $codePostalVille): static
    {
        $this->codePostalVille = $codePostalVille;
        return $this;
    }

    public function getNomVille(): ?string
    {
        return $this->nomVille;
    }

    public function setNomVille(string $nomVille): static
    {
        $this->nomVille = $nomVille;
        return $this;
    }
}

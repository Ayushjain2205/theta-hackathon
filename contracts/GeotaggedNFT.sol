// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GeotaggedNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Location {
        string latitude;
        string longitude;
    }

    struct Metadata {
        string name;
        string category;
        string description;
        string ipfsHash;
    }

    mapping(uint256 => Location) private _tokenLocations;
    mapping(uint256 => Metadata) private _tokenMetadata;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {}

    function mintNFT(
        string memory latitude,
        string memory longitude,
        string memory name,
        string memory category,
        string memory description,
        string memory ipfsHash
    ) external returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenLocation(newItemId, latitude, longitude);
        _setTokenMetadata(newItemId, name, category, description, ipfsHash);
        return newItemId;
    }

    function getLocation(
        uint256 tokenId
    ) external view returns (string memory latitude, string memory longitude) {
        Location memory location = _tokenLocations[tokenId];
        return (location.latitude, location.longitude);
    }

    function getMetadata(
        uint256 tokenId
    )
        external
        view
        returns (
            string memory name,
            string memory category,
            string memory description,
            string memory ipfsHash
        )
    {
        Metadata memory metadata = _tokenMetadata[tokenId];
        return (
            metadata.name,
            metadata.category,
            metadata.description,
            metadata.ipfsHash
        );
    }

    function _setTokenLocation(
        uint256 tokenId,
        string memory latitude,
        string memory longitude
    ) internal {
        require(_exists(tokenId), "ERC721: Location set of nonexistent token");
        Location storage location = _tokenLocations[tokenId];
        location.latitude = latitude;
        location.longitude = longitude;
    }

    function _setTokenMetadata(
        uint256 tokenId,
        string memory name,
        string memory category,
        string memory description,
        string memory ipfsHash
    ) internal {
        require(_exists(tokenId), "ERC721: Metadata set of nonexistent token");
        Metadata storage metadata = _tokenMetadata[tokenId];
        metadata.name = name;
        metadata.category = category;
        metadata.description = description;
        metadata.ipfsHash = ipfsHash;
    }
}

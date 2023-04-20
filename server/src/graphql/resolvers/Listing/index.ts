import { ObjectId } from "mongodb";
import { IResolvers } from "apollo-server-express"; // graphql
import { DataBase, Listing } from "../../../lib/types";

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: {},
      { db }: { db: DataBase }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: DataBase }
    ): Promise<Listing> => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteRes) {
        throw new Error("failed to delete listing");
      }
      return deleteRes.value;
    },
  },
  Listing: { id: (listing: Listing) => listing._id.toString() },
};

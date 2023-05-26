import merge from "lodash.merge";
import { bookingResolvers } from "./Booking";
import { listingResolvers } from "./Listing";
import { userResolvers } from "./User";
import { viewerResolver } from "./Viewer";

export const resolvers = merge(
  bookingResolvers,
  listingResolvers,
  userResolvers,
  viewerResolver
);

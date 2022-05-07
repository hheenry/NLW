import {EntityRepository, Repository} from "typeorm";
import {Tag} from "../entities/tags";

@EntityRepository(Tag)
class TagsRepository extends Repository<Tag> {}

export {TagsRepository};
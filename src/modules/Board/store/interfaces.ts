import {
  IBoardFields,
  IBoardLayout,
  ITilesList,
  IBoardTile,
  IDraggedTile,
} from '../interfaces';

export type IBoardState = {
  boardFields: IBoardFields;
  tilesList: ITilesList;
  layout: IBoardLayout;
  newMove: IBoardTile[];
  draggedTile: IDraggedTile | null;
};

export interface ICoordinates {
  x: number;
  y: number;
}

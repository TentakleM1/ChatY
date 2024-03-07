import { Block } from "../../block";

export default function render(query: string, block: Block) {
  
    const root = document.querySelector(query);

    root?.append(block.getContent());

    return root;
  }
  
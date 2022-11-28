""" Simple generator for multilingual support of the docsplant website."""
import json
import typing as t
from dataclasses import dataclass
from pathlib import Path

import jinja2


@dataclass
class Input:
    data: t.Dict
    target_dir: Path


def render_template_dir(inputs: t.List[Input], template_dir: Path) -> None:
    """Render all template files in the given directory for all inputs.

    Args:
        inputs: List of inputs to render.
        template_dir: Path to the template directory.
    """
    templateLoader = jinja2.FileSystemLoader(searchpath=template_dir)
    templateEnv = jinja2.Environment(loader=templateLoader)
    for template in template_dir.glob("*.j2"):
        for input in inputs:
            template = templateEnv.get_template(template.name)
            rendered_template = template.render(input.data)
            input.target_dir.mkdir(exist_ok=True, parents=True)
            with (input.target_dir / template.name.strip(".j2")).open("w") as f:
                f.write(rendered_template)


if __name__ == "__main__":
    template_dir = Path(__file__).parent / "templates"
    target_dir = Path(__file__).parents[1] / "build"
    with (Path(__file__).parent / "resources" / "en.json").open("r") as f:
        data_en = json.load(f)
    with (Path(__file__).parent / "resources" / "de.json").open("r") as f:
        data_de = json.load(f)

    render_template_dir(
        [
            Input(data=data_en, target_dir=target_dir / "en"),
            Input(data=data_de, target_dir=target_dir / "de"),
        ],
        template_dir=template_dir,
    )

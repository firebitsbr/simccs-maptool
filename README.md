# SimCCS Map Tool

## Getting Started

1. Follow the instructions for installing the
   [Airavata Django Portal](https://github.com/apache/airavata-django-portal)
2. With the Django Portal virtual environment activated, clone this repo and
   install it into the portal's virtual environment

   ```
   git clone https://github.com/SciGaP/simccs-maptool.git
   cd simccs-maptool
   python setup.py develop
   ```

3. Start (or restart) the Django Portal server.
4. Open <http://localhost:8000/maptool> in your browser.

## Django portal configuration

The following settings are relevant for the SimCCS Map Tool. These can be
specified in Django Portal's `settings_local.py` file.

- `JAVA_HOME` - the Java home directory. Defaults to the JAVA_HOME env variable
  if not set.
- `MAPTOOL_SETTINGS` - this is a dictionary of Map Tool specific settings:
  - `CPLEX_APPLICATION_ID` - The Airavata application module id of the Cplex application to launch.
  - `DATASETS_DIR` - Directory of datasets and their basedata (cost network).

Example of custom settings in a `settings_local.py` file:

```python
JAVA_HOME = "/usr/java/default"
MAPTOOL_SETTINGS = {
    "CPLEX_APPLICATION_ID": "Cplex_a7eaf483-ab92-4441-baeb-2f302ccb2919",
    "DATASETS_DIR": "/data/simccs-datasets"
}
```


## Pyjnius - simccs.jar notes

### Installing dependencies

In your virtual environment install the following:

```
pip install cython
pip install pyjnius
```

### Building the SimCCS jar

#### Building the simccs.org desktop client code

```
mvn -P pack-jar-without-gateway install
```

#### Building simccs GitHub repo code

**Note: these build steps are for the SimCCS jar from the GitHub repo, but the
jar currently being using in this Django app is the one used by the simccs.org
desktop client.**

Clone https://github.com/simccs/SimCCS

```
cd SimCCS/
mkdir build
find src -name "*.java" | xargs javac -cp ext/openmap.jar -d build/
find build/ -name "*.class" | xargs jar cvf build/SimCCS.jar -C build/
```

Then copy `build/SimCCS.jar` to `simccs_maptool/simccs/lib/SimCCS.jar`.

### MacOS notes

I ran into issues and followed the suggestions here:
https://github.com/joeferner/node-java/issues/90#issuecomment-45613235

Edited `/Library/Java/JavaVirtualMachines/jdk1.8.0_121.jdk/Contents/Info.plist`
and added JNI to JVMCapabilities:

```xml
...
<key>JVMCapabilities</key>
<array>
        <string>CommandLine</string>
        <string>JNI</string>
</array>
...
```

### Testing Pyjnius

You should be able to run the following with your virtual environment activated:

```python
import jnius_config
import os

jnius_config.set_classpath(
    os.path.join(os.getcwd(), "simccs_maptool", "simccs", "lib", "simccs-app-1.0-jar-with-dependencies.jar"),
)
from jnius import autoclass

basepath = os.path.join(os.getcwd(), "simccs_maptool", "simccs", "Datasets")
dataset = "SoutheastUS"
scenario = "scenario1"
DataStorer = autoclass("simccs.dataStore.DataStorer")
data = DataStorer(basepath, dataset, scenario)
Solver = autoclass("simccs.solver.Solver")
solver = Solver(data)
data.setSolver(solver)
candidate_graph = data.generateCandidateGraph()
```

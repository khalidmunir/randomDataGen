#!/bin/bash

FileName=10

while [ $FileName -le 12 ]
do
  # echo "./runner.sh > NAS/PII/new_$fileIndex.csv"
#
./runner.sh > NAS/PII/$FileName.csv
./runner.sh > NAS/PCI/$FileName.csv
./runner.sh > NAS/SPEC/$FileName.csv
./runner.sh > NAS/RET/$FileName.csv
./runner.sh > NAS/UNC/$FileName.csv
./runner.sh > NAS/SEC/$FileName.csv
./runner.sh > NAS/CLS/$FileName.csv
./runner.sh > NAS/INT/$FileName.csv
./runner.sh > NAS/PUB/$FileName.csv

# SP
./runner.sh > SP/PII/$FileName.csv
./runner.sh > SP/PCI/$FileName.csv
./runner.sh > SP/SPEC/$FileName.csv
./runner.sh > SP/RET/$FileName.csv
./runner.sh > SP/UNC/$FileName.csv
./runner.sh > SP/SEC/$FileName.csv
./runner.sh > SP/CLS/$FileName.csv
./runner.sh > SP/INT/$FileName.csv
./runner.sh > SP/PUB/$FileName.csv

  ((FileName++))
done


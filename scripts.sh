for dir in corpora/*
do 
    filename=$(echo $dir | cut -d "/" -f 2)
    echo file:$filename
    for file in $dir/* 
    do
	echo second$file
    done
done
